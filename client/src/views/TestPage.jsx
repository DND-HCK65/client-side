import { useState, useEffect } from "react";
import { doc, onSnapshot, updateDoc, getDoc,getDocs,collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Tes() {
  const [voters, setVoters] = useState([]);
  const [paslon, setPaslon] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [loading, setLoading] = useState(true);
  const fetchData =async ()=>{
    let arr = []
    const querySnapshot = await getDocs(collection(db, "polling"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      arr.push({id : doc.id,data: doc.data()});
    });
    setPaslon(arr)
    console.log(arr);
  }

  useEffect(() => {
    fetchData()
    // console.log(docSnap.data());
  }, []); // Add totalVotes as a dependency


  return (
    <div className="container mx-auto p-6 flex flex-wrap justify-center gap-5">
    </div>
  );
}
