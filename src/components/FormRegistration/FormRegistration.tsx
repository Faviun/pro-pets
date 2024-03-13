import React from "react";
import LogoSecondary from "../../uikit/Logo/LogoSecondary";
import Google from "../../uikit/icons/Google/Google";
import FacebookReg from "../../uikit/icons/FacebookReg/FacebookReg";
import Apple from "../../uikit/icons/Apple/Apple";

const FormRegistration = () => {
    return (
        <div className="w-full h-full relative">
            <div className="bg-image absolute top-0 let-0 h-full w-full opacity-70"></div>
            <div className="absolute top-0 left-0 bg-[#266F6266] w-full h-full opacity-40"></div>
            <div className="absolute top-0 left-0 bg-black w-full h-full opacity-20"></div>
            <div className="rounded-[15px] p-[15px] bg-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-row gap-[24px]">
                <form className="basis-1/2 px-[29px] py-[31.5px]">
                    <LogoSecondary />
                    <p className="text-[27px] font-[700]">
                        Getting Started Now
                    </p>
                    <p className="text-[14px]">
                        Enter your credentials to access your account
                    </p>
                    <div className="flex mt-[15px] gap-[10px]">
                        <div className="flex py-[5px] px-[10px] border border-[#DCDCDC] rounded-[5px] items-center gap-[5px] w-[122px]">
                            <Google />
                            <p className="text-[8px] w-[75px]">
                                Log in with Google
                            </p>
                        </div>
                        <div className="flex py-[5px] px-[10px] border border-[#DCDCDC] rounded-[5px] items-center gap-[5px]">
                            <FacebookReg />
                            <p className="text-[8px] w-[84px]">
                                Log in with Facebook
                            </p>
                        </div>
                        <div className="flex py-[5px] px-[10px] border border-[#DCDCDC] rounded-[5px] items-center gap-[5px]">
                            <Apple />
                            <p className="text-[8px] w-[75px]">
                                Log in with Apple
                            </p>
                        </div>
                    </div>
                    <div className="py-[11px] relative">
                        <hr />
                        <p className="bg-white px-[10px] absolute top-0 left-[50%] -translate-x-[50%]">
                            Or
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="mt-[15px] text-[12px] font-[400]"
                            htmlFor="email"
                        >
                            E-mail
                        </label>
                        <input
                            className="mt-[5px] py-[8px] px-[10px] border-[0.5px] rounded-[10px] text-[14px] font-[400]"
                            name="email"
                            type="email"
                            placeholder="Enter your email or number"
                        />
                        <label
                            className="mt-[10px] text-[12px] font-[400]"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="mt-[5px] py-[8px] px-[10px] border-[0.5px] rounded-[10px] text-[14px] font-[400]"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                        />
                        <label
                            className="mt-[10px] text-[12px] font-[400]"
                            htmlFor=""
                        >
                            Password
                        </label>
                        <input
                            className="mt-[5px] py-[8px] px-[10px] border-[0.5px] rounded-[10px] text-[14px] font-[400]"
                            type="password"
                            placeholder="Enter your password"
                        />
                        <p className="text-[#FF7171] mt-[5px] text-[12px] font-[400]">
                            Слишком короткий пароль
                        </p>
                        <label
                            className="mt-[10px] text-[12px] font-[400]"
                            htmlFor="country"
                        >
                            Select your Country
                        </label>
                        <select
                            className="py-[8px] px-[10px] border-[0.5px] rounded-[10px] text-[14px] font-[400]"
                            name="country"
                        >
                            <option>Moldova</option>
                        </select>
                        <div className="mt-[15px] flex items-center gap-[5px]">
                            <input type="checkbox" />
                            <p className="text-[12px] font-[400]">
                                I agree with{" "}
                                <span className="text-[#FF855F] cursor-pointer underline">
                                    Terms & Privacy
                                </span>
                            </p>
                        </div>
                        <input
                            className="mt-[15px] rounded-[10px] py-[8px] bg-[#266F62] text-white text-[12px] font-[600] cursor-pointer"
                            type="submit"
                            value="Login"
                        />
                        <p className="mt-[15px] text-[12px] font-[400]">
                            Have an account?{" "}
                            <span className="text-[#FF855F] cursor-pointer underline">
                                {" "}
                                Sing in!
                            </span>
                        </p>
                    </div>
                </form>
                {/* <img className="reg-image p-[15px] basis-1/2 w-full" src="../../../public/registration-photo.jpg" alt="registration_photo"/> */}
                <div className="reg-image basis-1/2 w-[420px]"></div>
            </div>
        </div>
    );
};

export default FormRegistration;
