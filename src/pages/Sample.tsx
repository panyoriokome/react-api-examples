import {useState, useEffect} from 'react'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const url = "https://jsonplaceholder.typicode.com";
const options: AxiosRequestConfig = {
    url: `${url}/users`,
    method: "GET",
  };
  
export const Sample: React.VFC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [status, setStatus] = useState<number | null>(null);

    useEffect(() => {
        axios(options)
        .then((res: AxiosResponse<User[]>) => {
          const { data, status } = res;
          setUsers(data);
          setStatus(status);
        })
        .catch((e: AxiosError<{ error: string }>) => {
          // エラー処理
          console.log(e.message);
        });
    }, [])

    return (
        <div>
            <h1>Axios</h1>
            <ul>
        {users.map(({ id, name }) => {
          return (
            <li key={id}>
              {id} : {name}
            </li>
          );
        })}
      </ul>    
        </div>
    )
}