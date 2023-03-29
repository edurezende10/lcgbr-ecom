self.addEventListener('fetch', event => {
      // Intercept all network requests
      const request = event.request;
    
     
    
      // Check if the request is a POST request
      if (request.method === 'POST') {
        // Read the payload data here
        request.text().then(payload => {
          console.log('POST request payload:', payload);
        });
      }
    
     
    
      // Continue with the request normally
      event.respondWith(fetch(request));
    });