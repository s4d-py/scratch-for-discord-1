export default async function require(array,oldarray) {
oldarray.forEach(py=>{
    if(py.includes("easy-db-json")){
        array.push(`"easy-db-json": "^1.1.1"`)
    }
})
array.reverse()
array[0] = array[0].replace(",","")
array.reverse()
}
