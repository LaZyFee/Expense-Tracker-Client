import { motion } from "framer-motion";
import { useState } from "react";
import Input from "../../Component/Input";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="flex items-center justify-center min-h-screen shadow-xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card w-full max-w-md"
            >
                <div className="card-body">
                    <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                        Forgot Password
                    </h2>

                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit}>
                            <p className="text-gray-300 mb-6 text-center">
                                Enter your email address and we&apos;ll send you a link to reset
                                your password.
                            </p>
                            <Input
                                icon={Mail}
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:from-green-600 hover:to-emerald-700"
                                type="submit"
                            >
                                Send Reset Link
                            </motion.button>
                        </form>
                    ) : (
                        <div className="text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                <Mail className="h-8 w-8 text-white" />
                            </motion.div>
                            <p className="text-gray-300 mb-6">
                                If an account exists for {email}, you will receive a password
                                reset link shortly.
                            </p>
                        </div>
                    )}
                </div>

                <div className="card-footer flex justify-center">
                    <Link
                        to={"/login"}
                        className="text-sm text-green-400 hover:underline flex items-center"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Login
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};
export default ForgetPassword;
