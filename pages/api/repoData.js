export default async function handler(req, res) {
  //   const getProjects = async () =>{
  //         const res = await fetch(`https://api.github.com/users/JackWorld99/repos`)
  //         const projectLists = await res.json()
  //         const arr = []
  //         projectLists.map((p,index)=>{
  //             const test = {
  //                 id: index+1,
  //                 name:(p.name).split('-').join(" "),
  //                 url:p.html_url,
  //                 description:p.description,
  //                 img:(p.name).split('-').join(" ")
  //             }
  //             arr.push(test)   
  //         })
  //         console.log(arr)
  //     }
  //     getProjects()
      res.status(404).end()
  }
  