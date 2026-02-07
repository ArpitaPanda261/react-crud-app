import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { userFormFields } from "../config/formConfig";
import type { UserFormData } from "../types/user";

interface Props {
    onSubmit: (data: UserFormData) => void;
    defaultValues?: UserFormData;
}

export default function UserForm({ onSubmit, defaultValues }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<UserFormData>({
        defaultValues
    });

    useEffect(() => {
        reset(defaultValues);
    }, [defaultValues, reset]);


    return (
        <form
            onSubmit={handleSubmit((data) => {
                onSubmit(data);
                reset(); // clear form after save
            })}
            className="user-form"
        >
            <h3>Add / Edit User</h3>

            {userFormFields.map((field) => (
                <div key={field.name} className="form-group">
                    <label>
                        {field.label}
                    </label>

                    <input
                        type={field.type || "text"}
                        inputMode={field.name === "phone" ? "numeric" : undefined}
                        {...register(field.name as keyof UserFormData, {
                            required: field.required
                                ? `${field.label} is required`
                                : false,
                            pattern: field.pattern
                        })}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        className="form-input"
                    />

                    {errors[field.name as keyof UserFormData] && (
                        <p className="error-message">
                            {
                                errors[field.name as keyof UserFormData]
                                    ?.message as string
                            }
                        </p>
                    )}
                </div>
            ))}

            <button type="submit" className="btn btn-primary">
                {defaultValues ? "Update User" : "Create User"}
            </button>
        </form>
    );
}
