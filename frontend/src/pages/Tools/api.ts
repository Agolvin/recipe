


export const testTools = async () => {
  try {
    
    console.log("testTools");
    const response = await fetch("http://localhost:3000/tools/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};



export const migrationTools = async () => {
    try {
      console.log("testTools");
      const response = await fetch("http://localhost:3000/tools/migration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (err) {
      const error = err as Error;
      throw error;
    }
  };









