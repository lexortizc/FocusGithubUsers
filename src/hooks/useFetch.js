import { useState } from 'react';
import axios from "axios";


export const useFetch = (username) => {
  const ACCESS_TOKEN = import.meta.env.VITE_GITHUB_TOKEN
  const [ user, setUser ] = useState({
    data: {},
    isLoading: true,
    hasError: false
  });

  const getUser = () => {
    axios
    .get(`https://api.github.com/users/${username}`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      }
    })
    .then(data => {
      setUser( prev => ({
        ...prev,
        data: data?.data,
        isLoading: false
      }))
    })
    .catch(() => {
      setUser({
        data: {},
        isLoading: false,
        hasError: true
      })
    })
  }

  return {
    ...user,
    getUser
  }
}

