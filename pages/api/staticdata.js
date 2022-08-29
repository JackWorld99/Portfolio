import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
  //fetch data and store json
  // const getProjects = async () =>{
    //     const res = await fetch(`https://api.github.com/users/JackWorld99/repos`)
    //     const projectLists = await res.json()
    //     const arr = []
    //     projectLists.map((p,index)=>{
    //         const test = {
    //             id: index+1,
    //             name:(p.name).split('-').join(" "),
    //             url:p.html_url,
    //             description:p.description,
    //             img:(p.name).split('-').join(" ")
    //         }
    //         arr.push(test)   
            
    //     })
    //     console.log(arr)
    // }

    // getProjects()
}