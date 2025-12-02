import { useState, useEffect } from "react";

export const FlowerBackground = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {

    generateFlowers();
  }, []);


  const generateFlowers = () =>{
    const numberOfFlowers = 20;
        const newFlowers = []

        for (let i = 0; i < numberOfFlowers; i++) {
            newFlowers.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 70,
                delay: Math.random() * 10,
                animationDuration: Math.random() * 3 + 3,
            })
        }

        setFlowers(newFlowers);
  }
  return (
    <div className="fixed inset-0 pointer-events-none z-0 dark:hidden">
      {flowers.map(f => (
        <div
          key={f.id}
          className="fall-flower animate-flowers"
          style={{
            fontSize: f.size * 8 + "px",
            left: f.x + "%",
            top: f.y + "vh",
            animationDelay: f.delay,
            animationDuration: f.animationDuration + "s",
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};
