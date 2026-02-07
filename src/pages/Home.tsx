import { useEffect, useState, useMemo } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "../api/api";
import type { User, UserFormData } from "../types/user";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch users
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch {
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Create / Update
  const handleSubmit = async (data: UserFormData) => {
    setSaving(true);
    setError(null);

    try {
      if (editingUser) {
        await updateUser(editingUser.id!, data);
        setEditingUser(null);
      } else {
        await createUser(data);
      }
      fetchUsers();
    } catch {
      setError("Failed to save user");
    } finally {
      setSaving(false);
    }
  };

  // Delete
  const handleDelete = async (id: number) => {
    setError(null);
    try {
      await deleteUser(id);
      fetchUsers();
    } catch {
      setError("Failed to delete user");
    }
  };

  // Default values for edit
  const formDefaultValues = useMemo(() => {
    if (!editingUser) return undefined;

    return {
      firstName: editingUser.firstName,
      lastName: editingUser.lastName,
      phone: editingUser.phone,
      email: editingUser.email
    };
  }, [editingUser]);

  return (
  <div className="app-container">
    <h1 className="app-title">User Management</h1>

    {error && <p className="status-text error">{error}</p>}
    {saving && <p className="status-text">Saving...</p>}

    <UserForm
      onSubmit={handleSubmit}
      defaultValues={formDefaultValues}
    />

    <div className="table-container">
      {loading ? (
        <p className="status-text">Loading users...</p>
      ) : (
        <UserList
          users={users}
          onEdit={setEditingUser}
          onDelete={handleDelete}
        />
      )}
    </div>
  </div>
);

}
