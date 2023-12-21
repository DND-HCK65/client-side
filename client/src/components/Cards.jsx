import { useEffect, useState } from "react";
import CardButton from "./CardButton";
import { getDocs,collection } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

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
    <div className="flex flex-row gap-4">
    {category.map(e=>{
      return(
      <>
      <div className="max-w-sm bg-secondary border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-none mx-auto h-80 w-80"
          src={e.data.image}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
            {e.data.category}
          </h5>

          <p className="mb-3 font-normal text-black dark:text-white">
            {e.data.context}
          </p>
          <Link to={`/vote-page?${e.id}`}>
          <CardButton />
          </Link>
        </div>
      </div>
      </>
      )

    })}
    </div>
    </>
  );
}
