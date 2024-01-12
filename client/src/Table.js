import { useEffect, useState } from "react"

export default function Table(){
	const [data, setdata] = useState([])
	useEffect(() => {
	async function fetchdata(){
		let data=await fetch('https://quantum-qs9d.onrender.com/data')
		let response=await data.json()
		setdata(response)
	}
	 fetchdata()
	}, [])
	
    return(<>
    <div className="bg-gradient-to-b from-[#007785] via-[#009CA0] to-[#00C2BC] h-screen flex justify-center items-center w-full">
        <div className="w-[80%] xsm:w-[100%]">
        <table width="100%" className="mt-2   xsm:w-full " >
						<thead>
							<tr>
								<th className="xsm:hidden"  align="left" >
									Sr.No.</th>
								<th scope="col" align="left">
									Name</th>
								<th scope="col" align="left">
									Date of birth</th>
								<th  scope="col" align="left">
									Email id</th>
								<th scope="col" align="left">
									Password</th>
								
							</tr>
						</thead>
						<tbody  >
							{data.map((item,index)=>{
								return(<>
								<tr key={index} className="">
								<td className="xsm:hidden">
									<strong>{index+1}.</strong></td>
								<td className="  xsm:p-0  xsm:h-auto xsm:text-wrap">
									{item.name}</td>
								<td className="  xsm:p-0  xsm:h-auto xsm:text-wrap">
									{item.dob}</td>
								<td className="  xsm:p-0  xsm:h-auto xsm:text-wrap">
									{item.email}</td>
								<td className="  xsm:p-0  xsm:h-auto xsm:text-wrap">
									{item.password}</td>
								
							</tr>
								</>)
							})}
							
							
						</tbody>
					</table>
        </div>
    </div>
    </>)
}