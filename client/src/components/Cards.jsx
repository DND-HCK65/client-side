import { useEffect, useState } from "react";
import CardButton from "./CardButton";
import { doc, getDocs,collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Cards() {
  const [category,setCategory] = useState([])
  const fetchData =async ()=>{
    let arr = []
    const querySnapshot = await getDocs(collection(db, "polling"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      arr.push({id : doc.id,data: doc.data()});
    });
    setCategory(arr)
    console.log(arr);
  }

  useEffect(() => {
    fetchData()
    // console.log(docSnap.data());
  }, []); 
  return (
    <>
    {category.map(e=>{
      return(

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg mx-auto h-80 w-80"
          src={e.data.image}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {e.data.category}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {e.data.context}
          </p>
          <CardButton />
        </div>
      </div>
      )

    })}
    </>
  );
}
