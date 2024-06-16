// 5. Crie um componente funcional chamado RandomUser que exiba informações de um usuário aleatório obtidas da API pública Random User (https://randomuser.me/api/). Quando o componente for montado, ele deve fazer uma requisição à API e exibir o nome, email e foto do usuário retornado. Inclua também um botão "Carregar Novo Usuário" que, ao ser clicado, faça uma nova requisição à API para exibir um novo usuário aleatório.

import { Loader2 } from "lucide-react";
import swr from "swr";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erro ao carregar dados");
  }

  return data.results[0];
}

type User = {
  name: {
    title: string;
    first: string;
    last: string
  }
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  }
};

export const RandomUser = () => {
  const { data: user, mutate: reloadUser, isLoading, isValidating, error } = swr<User>("https://randomuser.me/api/", fetcher, {
    revalidateOnFocus: false,

  });

  return (
    <div className="bg-white px-4 py-8 rounded-md shadow-md max-w-md mx-auto">
      {
        error ? (
          <div className="flex flex-col items-center justify-center  bg-red-50 border border-red-400 rounded-md py-2 px-4">
            <p className="text-center text-red-500">Erro ao carregar usuário</p>
          </div>
        ) :
          user ? (
            <>
              <img src={user.picture.large} alt={`Imagem de ${user.name.first}`}
                className="w-24 h-24 rounded-full mx-auto border border-neutral-100" />
              <h2 className="text-xl font-semibold text-center mt-4">{user.name.first} - {user.name.last}</h2>
              <p className="text-center text-gray-500">{user.email}</p>
            </>
          ) : (
            <p className="text-center">Loading...</p>
          )}

      <button
        disabled={isLoading || isValidating}
        onClick={() => reloadUser()}
        className="flex items-center gap-2 bg-neutral-900 disabled:bg-neutral-800 text-white px-4 py-2 rounded-md mx-auto mt-4"
      >
        Carregar Novo Usuário
        {
          isLoading || isValidating && (
            <Loader2 className="w-5 h-5 animate-spin" />
          )
        }
      </button>
    </div>
  );
};
