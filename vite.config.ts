import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function rfqApiPlugin(): Plugin {
  return {
    name: 'rfq-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/rfq', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              console.log('[dentfull.com RFQ Gateway] Inquiry received for sales@dentfull.com:', data.productOfInterest);
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(
                JSON.stringify({
                  success: true,
                  message:
                    'Thank you for contacting dentfull! Your inquiry has been received and routed to our sales team at sales@dentfull.com. An engineer will follow up with formal pricing within 12 hours.',
                  target: 'sales@dentfull.com',
                  receivedAt: new Date().toISOString()
                })
              );
            } catch (err) {
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload' }));
            }
          });
        } else {
          res.statusCode = 200;
          res.end(JSON.stringify({ status: 'dentfull RFQ API Active', target: 'sales@dentfull.com' }));
        }
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), rfqApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
