import { Link } from "@inertiajs/react";

const ShowUserDetailsPage = ({ user }) => {
    return (
        <>
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-medium">User Details</h2>
                <Link href={route("users.index")} className="btn btn-muted">
                    Go back
                </Link>
            </div>

            <div className="flex gap-5">
                <img
                    src="https://i.pravatar.cc/230"
                    width={230}
                    height={230}
                    className="rounded-md"
                    alt=""
                />

                <div>
                    <h2 className="text-lg">
                        <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                            Name:
                        </span>
                        <span className="text-zinc-500"> {user.name}</span>
                    </h2>
                    <h3 className="text-lg">
                        <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                            Email:
                        </span>
                        <span className="text-zinc-500"> {user.email}</span>
                    </h3>
                    <p className="text-lg">
                        <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                            Role:
                        </span>
                        <span className="text-zinc-500 capitalize">
                            {" "}
                            {user.role}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ShowUserDetailsPage;
