import { Accordion } from './components/accordion'
import { DynamicForm } from './components/dynamic-form'
import { RandomUser } from './components/random-user'
import { SearchFilter } from './components/search-filter'
import { Timer } from './components/timer'


function App() {

  const accordionItems = [
    { title: 'Item 1', content: 'Conteúdo do Item 1' },
    { title: 'Item 2', content: 'Conteúdo do Item 2' },
    { title: 'Item 3', content: 'Conteúdo do Item 3' },
    { title: 'Item 4', content: 'Conteúdo do Item 4' },
    { title: 'Item 5', content: 'Conteúdo do Item 5' },
  ]

  const dynamicFormFields = [
    { label: 'Nome', type: 'text' }, { label: 'Idade', type: 'number' },
    { label: 'Email', type: 'email' }, { label: 'Senha', type: 'password' },
    { label: 'Telefone', type: 'tel' },
    { label: 'Data de Nascimento', type: 'date' }
  ]

  const searchFilterItems = [
    "Cachorro",
    "Gato",
    "Papagaio",
    "Peixe",
    "Tartaruga",
    "Coelho",
  ]

  return (
    <main className='px-2 md:p-12 py-12 bg-gray-100 min-h-screen'>
      <div className='container space-y-6'>
        <div className='space-y-2'>
          <h1 className='text-4xl font-semibold'>
            Avaliação React - Delage
          </h1>
          <p className='text-lg font-semibold text-gray-500'>
            Este projeto foi desenvolvido para a avaliação de conhecimentos em React.
          </p>
        </div>

        <div className='grid grid-cols-1 place-content-center gap-8 max-w-xl mx-auto'>
          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold'>
              Temporizador
            </h2>
            <Timer />
          </div>
          <hr className='border-t-2 border-gray-300' />
          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold'>
              Accordion
            </h2>
            <Accordion items={accordionItems} />
          </div>
          <hr className='border-t-2 border-gray-300' />
          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold'>
              SearchFilter
            </h2>
            <SearchFilter items={searchFilterItems} />
          </div>

          <hr className='border-t-2 border-gray-300' />

          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold'>
              DynamicForm
            </h2>
            <DynamicForm fields={dynamicFormFields} />
          </div>
          <hr className='border-t-2 border-gray-300' />
          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold'>
              Usuário Aleatório
            </h2>
            <RandomUser />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
