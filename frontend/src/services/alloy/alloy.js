import { createInstance } from '@adobe/alloy';

// Read environment variables
const edgeConfigId = process.env.REACT_APP_EDGE_CONFIG_ID;
const orgId = process.env.REACT_APP_ORG_ID;

// Create Alloy instance
const alloy = createInstance({ name: 'alloy' });

// Function to initialize Alloy.js
export const initializeAlloy = () => {
    if (!edgeConfigId || !orgId) {
        console.error("❌ Missing Edge Config ID or Org ID in .env file.");
        return;
    }

    alloy('configure', {
        edgeConfigId,
        orgId,
        debugEnabled: true // Enable debugging
    })
    .then(() => {
        console.log("✅ Alloy.js successfully configured.");
    })
    .catch(error => {
        console.error("❌ Error configuring Alloy.js:", error);
    });
};

// Function to send an event
export const sendAlloyEvent = (eventData) => {
    return alloy('sendEvent', eventData)
        .then(response => console.log("✅ Event sent:", response))
        .catch(error => console.error("❌ Event failed:", error));
};

// Export the Alloy instance for direct usage
export default alloy;
