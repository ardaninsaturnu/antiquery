import {useState} from "react";

export const useForm = <T extends Record <keyof T, any> = {}> (options?: {
  validations?: Validations<T>;
  initialValues?: Partial<T>;
  onSubmit?: () => void;
}) => {
  const [ data, setData ] = useState<T>(( options.initialValues || {} ) as T;
  const [ errors, setErrors ] = useState({});

  const handleChange = (
    key,
    sanitizeFn,
  ) => (e) => {
    const value = sanitizeFn? sanitizeFn(e.target.value) : e.target.value;

    setData({
      ...data,
      [key]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(validations) {
      let valid = true;
      const newErrors = {};

      for( const key in validations ){
        const value = data[key];
        const validation = validations[key];

        // required
        if( validation?.required?.value && !value ){
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        //pattern
        const pattern = validation?.pattern;
        if( pattern?.value && !RegExp(pattern.value).test(value) ){
          valid = false;
          newErrors[key] = pattern.message;
        }

        // custom
        const custom = validation?.custom;
        if( custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }
      }
      if( !valid ){
        setErrors( newErrors );
        return
      }
    }

    setErrors({});

    if( options?.onSubmit ){
      options.onSubmit()
    }
  }

  return{
    data,
    handleChange,
    handleSubmit,
    errors
  }
};