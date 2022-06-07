export default async function require(array,intents,py) {
  //intents top, array bottom
  if(py.includes("flask")){
    array.push(`keep_alive()`)
  }
  if(py.includes("s4dmessage") || py.includes("s4dbot.command()")){
    intents.push(`intents.message_content = True`)
  }
  if(py.includes("base64")){
    intents.push(`import base64`)
  }
}