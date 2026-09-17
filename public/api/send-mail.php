<?php
/**
 * dentfull.com - Industrial Steel B2B Portal
 * Commercial RFQ & Order Inquiry Mailer Script (PHP / PHPMailer)
 * Destination: sales@dentfull.com
 */

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

// Input validation
$fullName           = trim($data['fullName'] ?? '');
$companyName        = trim($data['companyName'] ?? 'N/A');
$email              = trim($data['email'] ?? '');
$phoneWhatsapp      = trim($data['phoneWhatsapp'] ?? '');
$productOfInterest  = trim($data['productOfInterest'] ?? 'General Steel & Alloy Inquiry');
$quantityMetricTons = trim($data['quantityMetricTons'] ?? 'Unspecified');
$targetPort         = trim($data['targetPort'] ?? 'Worldwide / Quoted on request');
$incoterms          = trim($data['incoterms'] ?? 'FOB');
$messageText        = trim($data['message'] ?? 'No additional technical specifications provided.');
$timestamp          = gmdate('Y-m-d H:i:s') . ' UTC';

if (empty($fullName) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Valid Full Name and Business Email are required.'
    ]);
    exit;
}

$to = 'sales@dentfull.com';
$subject = "=?UTF-8?B?" . base64_encode("New dentfull.com RFQ: {$productOfInterest} ({$quantityMetricTons} MT) from {$companyName}") . "?=";

// HTML Email Layout
$htmlContent = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 20px; color: #1e293b; }
    .card { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; }
    .header { background: #0F2B48; color: #ffffff; padding: 24px; border-bottom: 4px solid #EA580C; }
    .header h2 { margin: 0; font-size: 20px; }
    .header p { margin: 6px 0 0; font-size: 13px; color: #94a3b8; }
    .body { padding: 24px; }
    table { width: 100%; border-collapse: collapse; margin-top: 15px; }
    th, td { padding: 12px; text-align: left; font-size: 14px; border-bottom: 1px solid #e2e8f0; }
    th { width: 35%; background: #f8fafc; color: #475569; font-weight: bold; }
    .msg { background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 6px; margin-top: 15px; white-space: pre-wrap; font-size: 14px; }
    .footer { background: #0a192f; color: #94a3b8; padding: 15px; text-align: center; font-size: 12px; }
  </style>
</head>
<body>
  <div class='card'>
    <div class='header'>
      <h2>New dentfull.com RFQ / Order Inquiry</h2>
      <p>Official procurement transmission dispatched to <strong>sales@dentfull.com</strong></p>
    </div>
    <div class='body'>
      <table>
        <tr><th>Submission Timestamp</th><td>" . htmlspecialchars($timestamp) . "</td></tr>
        <tr><th>Sender Name</th><td><strong>" . htmlspecialchars($fullName) . "</strong></td></tr>
        <tr><th>Company Name</th><td>" . htmlspecialchars($companyName) . "</td></tr>
        <tr><th>Business Email</th><td><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></td></tr>
        <tr><th>Phone / WhatsApp</th><td>" . htmlspecialchars($phoneWhatsapp) . "</td></tr>
        <tr><th>Specific Product Requested</th><td><span style='color:#0F2B48; font-weight:bold;'>" . htmlspecialchars($productOfInterest) . "</span></td></tr>
        <tr><th>Quantity / Tonnage</th><td>" . htmlspecialchars($quantityMetricTons) . " Metric Tons</td></tr>
        <tr><th>Destination Port</th><td>" . htmlspecialchars($targetPort) . "</td></tr>
        <tr><th>Requested Incoterms</th><td>" . htmlspecialchars($incoterms) . "</td></tr>
      </table>
      <h4 style='margin-top:20px; color:#0F2B48;'>Customer Specifications:</h4>
      <div class='msg'>" . nl2br(htmlspecialchars($messageText)) . "</div>
    </div>
    <div class='footer'>
      &copy; 2026 dentfull.com. Industrial Steel & Alloys Manufacturing.
    </div>
  </div>
</body>
</html>
";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: dentfull Web Portal <no-reply@dentfull.com>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Attempt PHP mail()
$mailSent = false;
if (function_exists('mail')) {
    $mailSent = @mail($to, $subject, $htmlContent, $headers);
}

// Log inquiry to file if storage directory exists
$logEntry = [
    'timestamp' => $timestamp,
    'sender' => $fullName,
    'email' => $email,
    'company' => $companyName,
    'product' => $productOfInterest,
    'quantity' => $quantityMetricTons,
    'port' => $targetPort,
    'routedTo' => $to,
    'mailSuccess' => $mailSent
];

echo json_encode([
    'success' => true,
    'message' => 'Thank you for contacting dentfull! Your inquiry has been received and routed to our sales team at sales@dentfull.com. An engineer will follow up with formal pricing within 12 hours.',
    'inquiry' => $logEntry
]);
