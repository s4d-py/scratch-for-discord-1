export default async function require(array,intents,py) {
  if(py.includes("flask")){
    array.push(`keep_alive()`)
  }
  if(py.includes("s4dmessage")){
    intents.push(`intents.message_content = True`)
  }
}
