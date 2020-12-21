const emailCollectorForm = document.getElementById("Email-Collector");
const mainContent = document.getElementById('Main-Content');   
emailCollectorForm.addEventListener("submit", event => {
    // Stop the default event behavior
    event.preventDefault();
    // use FormData to get the User's name and email    
     const ourFormData = new FormData(event.target);
     const firstNameData = ourFormData.get('firstName');
     const emailData = ourFormData.get('emailAddress');
     const updatedHtmlContent = `
        <h2>Congratulations, ${firstNameData}!</h2>

        <p>You're almost there!</p>
        
        <p class="fine-print">We will send your invitation to: ${emailData}</p>
    `
    mainContent.innerHTML = updatedHtmlContent;
    
})