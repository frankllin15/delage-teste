// 3. Desenvolva um componente funcional chamado SearchFilter que renderize uma lista de nomes e um campo de entrada de texto para filtrar essa lista. À medida que o usuário digita no campo de entrada, a lista deve ser filtrada para mostrar apenas os nomes que contêm o texto inserido. Utilize o hook useState para gerenciar o estado do campo de entrada e a lista filtrada. 

import { useState } from "react";

type SearchFilterProps = {
  items: string[];
};

export const SearchFilter = ({ items }: SearchFilterProps) => {
  const [search, setSearch] = useState('');

  const filteredItems = items.filter(item => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-4 bg-neutral-50 px-4 py-8 rounded-md shadow-md">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded-md"
      />

      <ul className="mt-4">
        {filteredItems.map((item, index) => (
          <li key={index} className="py-2 border-b border-gray-300 font-semibold text-neutral-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};