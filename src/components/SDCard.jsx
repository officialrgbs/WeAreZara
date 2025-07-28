import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import SDModal from "./SDModal";

function SDCard() {
  const [lsdItem, setLsdItem] = useState(null);
  const [nsdItem, setNsdItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchDays = async () => {
      const querySnapshot = await getDocs(collection(db, "school_days"))
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if(data.lsd && !lsdItem) {
          setLsdItem({id: doc.id, ...data})
        }
        if(data.nsd && !nsdItem) {
          setNsdItem({id: doc.id, ...data})
        }
      })
    }
    fetchDays();
  }, []);

  return (
    <div className="space-y-6">
      {lsdItem && (
        <div onClick={() => setIsModalOpen(true)} className="cursor-pointer p-4 rounded-xl bg-yellow-100 hover:bg-yellow-200 shadow transition">
          <h2 className="text-lg font-bold">Last School Day</h2>
          <p>{lsdItem.date}</p>
        </div>
      )}

      {nsdItem && (
        <div className="p-4 rounded-xl bg-blue-100 shadow">
          <h2 className="text-lg font-bold">Next School Day</h2>
          <p>{nsdItem.date}</p>
        </div>
      )}

      <SDModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} recap={lsdItem?.recap || ""}></SDModal>
    </div>
  )
}

export default SDCard;