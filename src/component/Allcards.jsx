


function Allcards({data})

{
    
    return (
        <div  className="mt-10 flex flex-wrap justify-around w-[80%] gap-3">
            {data.map(singleitem =>(
                <div className="bg-red-50 w-[25%] h-[500px]"
                 key={singleitem.id}>
                <img src={singleitem.thumbnail} alt="" className="aspect-square object-cover rounded-xl"/>
                <h2 className="text-left">{singleitem.title}</h2>
                <p className="text-right">${singleitem.price}</p>
                <p>{singleitem.description}</p>
            </div>
            ))}
            
            
        </div>
    )
}

export default Allcards;
