const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log('Submitting form data:', formData);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/form`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log('Response:', response);
  
      if (response.status >= 200 && response.status < 300) {
        setResult("Message Sent!");
        setFormData({
          username: "",
          email: "",
          phone: "",
          location: "",
          text: "",
        });
      } else {
        setResult("Message Failed! (Error: " + response.status + ")");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Message Failed! (Network Error)");
    }
  };
  