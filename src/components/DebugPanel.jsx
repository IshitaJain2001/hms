import React from "react";
import { useSelector } from "react-redux";
import "../stylesheets/DebugPanel.css";

export default function DebugPanel() {
  const bills = useSelector((state) => state.bills) || [];
  const purchaseHistory = useSelector((state) => state.purchaseHistory) || [];

  const handleClearAllData = () => {
    if (window.confirm("Are you sure you want to clear ALL data? This cannot be undone!")) {
      localStorage.removeItem("patients");
      localStorage.removeItem("appointments");
      localStorage.removeItem("doctors");
      localStorage.removeItem("medicines");
      localStorage.removeItem("bills");
      localStorage.removeItem("purchaseHistory");
      alert("All data cleared! Refreshing page...");
      window.location.reload();
    }
  };

  const handleShowData = () => {
    console.clear();
    console.log("=== BILLS ===", JSON.stringify(bills, null, 2));
    console.log("=== PURCHASE HISTORY ===", JSON.stringify(purchaseHistory, null, 2));
    alert("Check console (F12) for detailed data");
  };

  return (
    <div className="debug-panel">
      <div className="debug-buttons">
        <button className="btn-show" onClick={handleShowData}>
          📊 Show Data (Console)
        </button>
        <button className="btn-clear" onClick={handleClearAllData}>
          🗑️ Clear All Data
        </button>
      </div>
      
      <div className="debug-info">
        <p>Bills: {bills.length}</p>
        <p>Purchases: {purchaseHistory.length}</p>
      </div>
    </div>
  );
}
