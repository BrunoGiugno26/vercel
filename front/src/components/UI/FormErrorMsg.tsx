import React, { FC } from "react";

interface FormErrorMsgProps {
    msg: string;
}

const FormErrorMsg: FC<FormErrorMsgProps> = ({msg}) => {
    return (
        <p className="text-red-300 text-sm mb-2">
            {msg}
        </p>
    );
};
export default FormErrorMsg;