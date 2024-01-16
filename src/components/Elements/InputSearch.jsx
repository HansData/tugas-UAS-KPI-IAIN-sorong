import { FaSearch } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import CardTugasMahasiswa from './CardTugasMahasiswa';

const InputSearch = (props) => {
  const { identitas, type = 'text', placeholder = 'masukkan pencarian...', typeTugas } = props;
  const [focus, setFocus] = useState(false);
  const [inputText, setInputText] = useState('');

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const ringFocus = useRef();
  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  useEffect(() => {
    if (focus) {
      ringFocus.current.style.border = '1.5px solid #1EC1F9';
    } else {
      ringFocus.current.style.border = '1.5px solid #DBDEDE';
    }
  }, [focus]);

  {
    console.log(inputText);
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <div ref={ringFocus} className="rounded-md overflow-hidden lg:w-[400px] w-2/3 min-w-[300px] h-[46px mt-16 mb-5">
          <form action="" className="flex w-full h-full">
            <input onChange={inputHandler} onFocus={onFocus} onBlur={onBlur} type={type} id={identitas} name={identitas} placeholder={placeholder} className="p-3 outline-0 w-4/5 " />
            <button type="button" className="bg-blue-200 w-[20%] flex justify-center items-center">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          <CardTugasMahasiswa input={inputText} typeTugas={typeTugas}></CardTugasMahasiswa>
        </div>
      </div>
    </>
  );
};

export default InputSearch;
