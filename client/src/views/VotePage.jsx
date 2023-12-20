import { useState, useEffect } from "react";
import { doc, onSnapshot, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function PresidentVote() {
  const [voters, setVoters] = useState([]);
  const [paslon, setPaslon] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const taskDocRef = doc(db, "polling", "twgMr9lMXePE7Q40iYjA");
    const unsubscribe = onSnapshot(taskDocRef, (docSnapshot) => {
      const data = docSnapshot.data();
      let arr = [];
      let arr2 = [];
      for (const key in data["vote"]) {
        arr.push({
          name: key,
          data: data["vote"][key],
        });
      }
      for (const key in data["vote"]) {
        arr2.push(data["vote"][key]["voters"]);
      }
      setVoters(arr2);
      setPaslon(arr);
      setTotalVotes(data.totalVotes);
      setLoading(false);
    });
  }, [totalVotes]); // Add totalVotes as a dependency

  const handleUpdate = async (id) => {
    console.log(localStorage.name);
    if (!voters.join().includes(localStorage.name)) {
      const taskDocRef = doc(db, "polling", "twgMr9lMXePE7Q40iYjA");
      try {
        const docSnapshot = await getDoc(taskDocRef);
        const data = docSnapshot.data();
        const updatedVote = {
          ...data.vote,
          [id]: {
            ...data.vote[id],
            voters: [...data.vote[id].voters, localStorage?.name],
          },
        };
        await updateDoc(taskDocRef, {
          vote: updatedVote,
          totalVotes: data.totalVotes + 1,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container mx-auto p-6 flex flex-wrap justify-center gap-5">
      <h2 className="text-3xl font-bold mb-4 w-full text-center">
        Vote for President and Vice President
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        paslon.map((e) => (
          <div
            key={e.name}
            className={`bg-white border border-gray-300 p-4 mb-4 cursor-pointer transition duration-300 ${
              e.data.voters.length > 0 ? "active" : ""
            } rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}
          >
            <div className="card">
              <img
                src={e.data.image}
                alt={e.name}
                className="w-32 h-32 rounded-full mb-4 mx-auto"
              />
              <div className="card-body text-center">
                <p className="text-blue-500 font-bold">{e.name}</p>
                <div className="flex-grow bg-gray-200 h-4 mt-4 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-green-500 rounded-full transition-all duration-300 ease-in-out`}
                    style={{
                      width: `${
                        voters.join().split(",").length > 0
                          ? (e.data.voters.length /
                              voters.join().split(",").length) *
                            100
                          : 0
                      }%`,
                    }}
                  ></div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-600">
                    {e.data.voters.length} votes
                  </span>
                  <button
                    onClick={() => handleUpdate(e.name)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Vote
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
