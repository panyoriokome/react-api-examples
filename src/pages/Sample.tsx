import {useState, useEffect} from 'react'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const url = "https://jsonplaceholder.typicode.com";
const options: AxiosRequestConfig = {
    url: `${url}/users`,
    method: "GET",
  };
  
export const Sample: React.VFC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [users2, setUsers2] = useState<User[]>([]);
    const [users3, setUsers3] = useState<User[]>([]);

    useEffect(() => {
        axios(options)
        .then((res: AxiosResponse<User[]>) => {
          const { data } = res;
          setUsers(data);
        })
        .catch((e: AxiosError<{ error: string }>) => {
          // エラー処理
          console.log(e.message);
        });
    }, [])

    useEffect(() => {
      const timerId = setInterval(() => onUpdate(), 5000)
      return () => clearInterval(timerId)
    }, [])

    function onUpdate() {
      console.log("定期的に実行してほしい")
      axios(options)
        .then((res: AxiosResponse<User[]>) => {
          const { data } = res;
          setUsers3(data);
        })
        .catch((e: AxiosError<{ error: string }>) => {
          // エラー処理
          console.log(e.message);
        });
    }

    function handleSubmit(e: any) : void {
      e.preventDefault();
      axios(options)
        .then((res: AxiosResponse<User[]>) => {
          const { data } = res;
          setUsers2(data);
        })
        .catch((e: AxiosError<{ error: string }>) => {
          // エラー処理
          console.log(e.message);
        });
    }

    return (
        <div>
            <h1>Axios</h1>
            <div>
              <h2>ページ読み込み時</h2>
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
            <div>
              <h2>ボタンクリック時</h2>
              <button onClick={handleSubmit}>API呼び出し</button>
              <ul>
                {users2.map(({ id, name }) => {
                  return (
                    <li key={id}>
                      {id} : {name}
                    </li>
                  );
                })}
              </ul>    
            </div>
            <div>
              <h2>定期的に実行</h2>
              <button onClick={handleSubmit}>API呼び出し</button>
              <ul>
                {users3.map(({ id, name }) => {
                  return (
                    <li key={id}>
                      {id} : {name}
                    </li>
                  );
                })}
              </ul>    
            </div>
        </div>
    )
}