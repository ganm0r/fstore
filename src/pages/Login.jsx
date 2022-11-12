import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { fstoreTheme } from '../theme';
import axios from '../helpers/apiClient';

const Login = () => {
  const [userToken, setUserToken] = useState(localStorage.getItem('userToken'));
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const { username, password } = formData;

  const onChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/auth/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        setUserToken(res.data.token);
        toast.success('welcome to fstore!');
        window.location.reload();
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data);
        }
      });
  };

  useEffect(() => {
    localStorage.setItem('userToken', userToken);
  }, [userToken]);

  return (
    <div>
      <div
        style={{
          display: 'grid',
          alignContent: 'center',
          justifyItems: 'center',
          height: '75vh',
        }}
      >
        <form
          onSubmit={onSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '40%',
            gap: '24px',
          }}
        >
          <Input type="text" placeholder="your username" name="username" value={username} onChange={onChange} />
          <Input type="password" placeholder="your password" name="password" value={password} onChange={onChange} />
          <Button bgColor={fstoreTheme.colors.black} fontColor={fstoreTheme.colors.yellow} type="submit" width="90%">
            Take me in!
          </Button>
        </form>
      </div>
    </div>
  );
};

export { Login };
