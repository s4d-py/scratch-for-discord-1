export default async function require(array,oldarray) {
oldarray.forEach(js=>{
    if(js.includes("flask")){
        array.push(`Flask = "^2.0.2"`)
    }
})
array.reverse()
array[0] = array[0].replace(",","")
array.reverse()
}
