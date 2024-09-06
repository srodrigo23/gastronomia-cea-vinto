import kallu from "@/app/recipe/kallu"

interface History{
  description:string
}

interface Recipe{
  ingredientsList:string[]
  stepsList:string[]
}

const History = (data:History) => {
  return(
    <p>{data.description}</p>
  )
}

const Ingredients = (data:Recipe)=>{
  return(
    <div>
      <div>
        <ul className="list-inside list-disc">
          {
            data.ingredientsList.map((el, index)=>(
              <li key={index}>{el}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <ol className="list-inside list-decimal">
          {
            data.stepsList.map((el, index)=>(
              <li key={index}>{el}</li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}

export default function Home() {
  const recetas = [
    kallu
  ]
  return(
    <div>
      <h1>{recetas[0].title}</h1>
      <History description={recetas[0].history}/>
      {/* <Image src */}
      <Ingredients ingredientsList={recetas[0].ingredients} stepsList={recetas[0].preparation}/>
    </div>
  )
}