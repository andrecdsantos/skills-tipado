import Image from "next/image";
import Link from "next/link";

export type Repository = {
  name: string;
  description: string;
  html_url: string;
  languages_url: string;
  created_at: string
}

const getRepositories = async (): Promise<Repository[]> => {
  const response = await fetch('https://api.github.com/users/andrecdsantos/repos')
  const data: Repository[] = await response.json()
  //const sortedResponse = data.sort((a,b) => a.name.localeCompare(b.name))
  const sortedResponse = data.sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
  return sortedResponse
}

const formatDate = ( dateString : string) => {
  const date = new Date(dateString)
  const formatter = new Intl.DateTimeFormat('pt-BR')
  return formatter.format(date)
}

export default async function Home( { params } : { params : { query:string } }) {
    const repositories = await getRepositories() 
    const decodedQuery = decodeURIComponent(params.query)
    const keywords = decodedQuery.trim().toUpperCase().split(' ')
    const filteredRepos = repositories.filter(repo=> keywords.every(word=> repo.name.toUpperCase().includes(word)))
  return (
    <>
      <h1 className="text-2xl text-center mb-4">Meus repositórios</h1>
      <span>{`Resultados da busca por : "${decodedQuery}"`}</span>
      {filteredRepos.length == 0 ? 
      <div className="grid items-center justify-center text-4xl">Nenhum resultado encontrado =( </div> 
      : 
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-wrap break-words break-all">
        {filteredRepos.map(repo => 
          <article key={repo.name} className="bg-secondary p-2 ">
            <div>
              <b className="text-tertiary text-lg">Projeto: </b>
              <p>{repo.name}</p>
            </div>
            <div>
              <b className="text-tertiary text-lg">Descrição: </b>
              <p>{repo.description}</p>
            </div>
            <div>
              <b className="text-tertiary text-lg">URL: </b>
              <Link href={repo.html_url} target="_blank">{repo.html_url}</Link>
            </div>
            <div>
              <b className="text-tertiary text-lg">Data da criação: </b>
              <p>{formatDate(repo.created_at)}</p>
            </div>
            <Languages languages_url={repo.languages_url}/>
          </article>  
        )}
      </section>
      }
    </>
  );
}

const getLanguages = async ( languages_url : string) => {
  const response = await fetch(languages_url)
  const data = await response.json()
  return data
}

const Languages = async ( { languages_url } : {languages_url: string}) => {
  const result = await getLanguages(languages_url)
  const languages = Object.keys(result)
  const languagesList = languages.join(', ') + '.' //usado para unir os elementos de um array em uma única string. Ele recebe um argumento opcional que especifica o separador a ser usado entre os elementos do array na string resultante.
  //por padrao join ja separa por , mas sem espaço entre os items
  return (
    <div>
              <b className="text-tertiary text-lg">Linguagens: </b>
              {/* {languages.map((language,index)=> 
                <span key={index}>{language}
                  {index === languages.length - 1 ? '.' : ', '}
                </span>
              )} */}
              <p>{languagesList}</p>
    </div>
  )
}
