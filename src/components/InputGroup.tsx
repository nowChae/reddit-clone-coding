import React from 'react';
import cls from 'classnames';

interface InputGroupProps{
  className?: string;
  type?: string;
  placeholder?: string;
  value: string;
  error: string | undefined;
  setValue: (str: string) => void; 
  /*string을 받고 return 값은 void */
}

const InputGroup: React.FC<InputGroupProps> = ({
  /*아무런 값들이 들어오지 않으면 기본 값 설정*/
  className = "mb-2",
  type = "text",
  placeholder = "",
  value,
  error,
  setValue
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        style={{minWidth: 300}}
        className= {cls(`w-full p-3 transition duration-200 border border-gray-400 rounded bg-gray-50 focus:bg-white hover:bg-white`,
        {"border-red-500": error})}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <small className='font-medium text-red-500'>{error}</small>
    </div>
  )
}

export default InputGroup