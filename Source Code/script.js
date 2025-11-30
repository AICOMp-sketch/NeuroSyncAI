// Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Neural network visualization
        function createNeuralNetwork() {
            const container = document.getElementById('neuralNetwork');
            const layers = 5;
            const nodesPerLayer = [3, 5, 7, 5, 3];
            
            // Create nodes
            for (let layer = 0; layer < layers; layer++) {
                for (let node = 0; node < nodesPerLayer[layer]; node++) {
                    const nodeElement = document.createElement('div');
                    nodeElement.className = 'node';
                    
                    // Position nodes
                    const xPos = (layer + 1) * (100 / (layers + 1));
                    const yPos = (node + 1) * (100 / (nodesPerLayer[layer] + 1));
                    
                    nodeElement.style.left = `${xPos}%`;
                    nodeElement.style.top = `${yPos}%`;
                    
                    // Add animation delay
                    nodeElement.style.animationDelay = `${Math.random() * 2}s`;
                    
                    container.appendChild(nodeElement);
                    
                    // Create connections to next layer
                    if (layer < layers - 1) {
                        for (let nextNode = 0; nextNode < nodesPerLayer[layer + 1]; nextNode++) {
                            const nextXPos = (layer + 2) * (100 / (layers + 1));
                            const nextYPos = (nextNode + 1) * (100 / (nodesPerLayer[layer + 1] + 1));
                            
                            const connection = document.createElement('div');
                            connection.className = 'connection';
                            
                            // Calculate length and angle
                            const length = Math.sqrt(
                                Math.pow(nextXPos - xPos, 2) + 
                                Math.pow(nextYPos - yPos, 2)
                            );
                            
                            const angle = Math.atan2(nextYPos - yPos, nextXPos - xPos) * 180 / Math.PI;
                            
                            connection.style.width = `${length}%`;
                            connection.style.left = `${xPos}%`;
                            connection.style.top = `${yPos}%`;
                            connection.style.transform = `rotate(${angle}deg)`;
                            
                            // Add animation
                            connection.style.animation = `pulse ${2 + Math.random() * 3}s infinite`;
                            connection.style.animationDelay = `${Math.random() * 2}s`;
                            
                            container.appendChild(connection);
                        }
                    }
                }
            }
            
            // Add CSS for pulse animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes pulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }

        // Initialize neural network when page loads
        document.addEventListener('DOMContentLoaded', createNeuralNetwork);