import { Link, useForm } from "@inertiajs/react";

const LoginPage = () => {
    const { processing, post, errors, setData } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <div className="card">
            <h1 className="text-2xl font-medium text-center border-b border-zinc-200 dark:border-zinc-700 pb-4 mb-4">
                Login
            </h1>
            <form onSubmit={handleSubmit}>
                <fieldset disabled={processing} className="disabled:opacity-70">
                    <div className="flex flex-col gap-y-1 mb-3">
                        <label htmlFor="email" className="input-label">
                            Email
                        </label>
                        <input
                            onChange={(e) => setData("email", e.target.value)}
                            type="email"
                            name="email"
                            className="input"
                        />
                        {errors.email && (
                            <span className="input-error">{errors.email}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-y-1 mb-3">
                        <label htmlFor="password" className="input-label">
                            Password
                        </label>
                        <input
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            type="password"
                            name="password"
                            className="input"
                        />
                        {errors.password && (
                            <span className="input-error">
                                {errors.password}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <label className="flex items-center gap-1.5">
                            <input
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                                type="checkbox"
                                name="remember"
                                className="input-checkbox"
                            />
                            <span className="text-zinc-700 dark:text-zinc-400 whitespace-nowrap">
                                Remember me
                            </span>
                        </label>
                        <Link
                            href="/forgot-password"
                            className="text-zinc-700 dark:text-zinc-400 hover:underline whitespace-nowrap"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        Login
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default LoginPage;
