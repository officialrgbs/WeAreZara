import { useEffect, useState } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import SDModal from "./SDModal";

function SDList() {
  const [schoolDays, setSchoolDays] = useState([]);
  const [selectedRecap, setSelectedRecap] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchSchoolDays = async () => {
      try {
        const snapshot = await getDocs(collection(db, "school_days"));
        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setSchoolDays(items)
      } catch (err) {
        console.error("Error fetching school days ", err);
      }
    }

    fetchSchoolDays()
  }, []);

  const handleItemClick = (recap) => {
    setSelectedRecap(recap);
    setIsModalOpen(true);
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">School Days</h2>
      <ul className="list-disc ml-6 space-y-2">
        {schoolDays.map((item) => (
          <li key={item.id} className={`cursor-pointer hover:underline ${item.suspended ? 'text-red-600' : ''}`} onClick={() => handleItemClick(item.recap)}>
            <strong>
              {item.date} {item.suspended && <span>(suspended)</span>}
            </strong>
          </li>
        ))}
      </ul>

      <SDModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} recap={selectedRecap} />
    </div>
  )
}

export default SDList;
