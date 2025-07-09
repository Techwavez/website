# EmailJS Setup Guide for TechWave Office Contact Form

## 🚀 Quick Setup Overview

Your contact form is now fully implemented with EmailJS integration! Follow these steps to make it operational:

1. **Create EmailJS Account** (5 minutes)
2. **Setup Email Service** (3 minutes)  
3. **Create Email Templates** (10 minutes)
4. **Configure Environment Variables** (2 minutes)
5. **Test the Integration** (5 minutes)

---

## 📋 Step 1: Create EmailJS Account

1. **Visit EmailJS**: Go to [https://www.emailjs.com](https://www.emailjs.com)
2. **Sign Up**: Click "Sign Up" and create a free account
3. **Verify Email**: Check your email and verify your account
4. **Login**: Sign in to your EmailJS dashboard

**Free Plan Includes:**
- ✅ 200 emails per month
- ✅ 2 email services
- ✅ Email templates
- ✅ Perfect for getting started!

---

## 📧 Step 2: Setup Email Service

### Option A: Gmail (Recommended)
1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"** and authorize EmailJS to access your Gmail
5. **Copy the Service ID** (e.g., `service_abc123`)

### Option B: Outlook/Hotmail
1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Outlook"**
4. Enter your Outlook credentials
5. **Copy the Service ID**

### Option C: Custom SMTP
1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Custom SMTP"**
4. Enter your email server settings
5. **Copy the Service ID**

---

## 📝 Step 3: Create Email Templates

### Template 1: Internal Notification (Required)

1. In EmailJS dashboard, click **"Email Templates"**
2. Click **"Create New Template"**
3. **Template Name**: `TechWave Contact Form Notification`
4. **Template ID**: Copy this ID (e.g., `template_xyz789`)

**Subject Line:**
```
New Contact Form Submission - {{service_type}}
```

**Email Body:**
```html
<h2>New Contact Form Submission</h2>

<h3>Contact Information:</h3>
<ul>
  <li><strong>Name:</strong> {{from_name}}</li>
  <li><strong>Email:</strong> {{from_email}}</li>
  <li><strong>Company:</strong> {{company_name}}</li>
  <li><strong>Phone:</strong> {{phone_number}}</li>
  <li><strong>Service Interest:</strong> {{service_type}}</li>
</ul>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p><em>This message was sent from the TechWave Office contact form.</em></p>
<p><strong>Reply to:</strong> {{reply_to}}</p>
```

**To Email**: Enter your business email (e.g., `contact@techwaveoffice.com`)

5. **Save Template** and copy the **Template ID**

### Template 2: Client Confirmation (Optional)

1. Click **"Create New Template"** again
2. **Template Name**: `TechWave Contact Confirmation`
3. **Template ID**: Copy this ID

**Subject Line:**
```
Thank you for contacting TechWave Office - We'll be in touch soon!
```

**Email Body:**
```html
<h2>Thank You for Contacting TechWave Office!</h2>

<p>Dear {{from_name}},</p>

<p>Thank you for reaching out to us regarding <strong>{{service_type}}</strong>. We have received your message and our team will review your requirements.</p>

<h3>What's Next?</h3>
<ul>
  <li>✅ Our team will review your submission within 24 hours</li>
  <li>📞 We'll contact you to schedule an initial consultation</li>
  <li>💡 We'll prepare a customized proposal for your needs</li>
</ul>

<h3>Your Submission Details:</h3>
<ul>
  <li><strong>Service of Interest:</strong> {{service_type}}</li>
  <li><strong>Company:</strong> {{company_name}}</li>
  <li><strong>Contact Email:</strong> {{from_email}}</li>
</ul>

<p>If you have any urgent questions, please don't hesitate to contact us directly at contact@techwaveoffice.com or call us.</p>

<p>Best regards,<br>
The TechWave Office Team</p>

<hr>
<p><em>This is an automated confirmation email.</em></p>
```

**To Email**: Use `{{from_email}}` (this sends to the client)

4. **Save Template** and copy the **Template ID**

---

## 🔧 Step 4: Configure Environment Variables

1. **Create Environment File**: In your project root, create a file called `.env.local`

2. **Add Configuration**: Copy and paste this template, replacing with your actual values:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_your_service_id_here
VITE_EMAILJS_TEMPLATE_ID_CLIENT=template_your_client_template_id_here
VITE_EMAILJS_TEMPLATE_ID_INTERNAL=template_your_internal_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

# Email Configuration  
VITE_CONTACT_EMAIL=contact@techwaveoffice.com
VITE_ADMIN_EMAIL=admin@techwaveoffice.com
```

3. **Get Your Public Key**:
   - In EmailJS dashboard, go to **"Account"** → **"General"**
   - Find **"Public Key"** and copy it
   - Replace `your_public_key_here` with this value

4. **Replace Template IDs**: Use the Template IDs you copied in Step 3

5. **Save the File**: Make sure `.env.local` is in your project root directory

---

## 🧪 Step 5: Test the Integration

1. **Start Development Server**:
   ```bash
   npm run dev
   ```

2. **Visit Contact Page**: Go to `http://localhost:5173/contact`

3. **Test the Form**:
   - Fill out all required fields
   - Use a real email address for testing
   - Submit the form

4. **Check Results**:
   - ✅ Form should show success message
   - ✅ You should receive internal notification email
   - ✅ Client should receive confirmation email (if configured)

5. **Troubleshooting**:
   - Check browser console for any errors
   - Verify all environment variables are set correctly
   - Check EmailJS dashboard for send logs

---

## 🔍 Verification Checklist

- [ ] EmailJS account created and verified
- [ ] Email service connected (Gmail/Outlook/SMTP)
- [ ] Internal notification template created
- [ ] Client confirmation template created (optional)
- [ ] Public key obtained
- [ ] `.env.local` file created with all variables
- [ ] Development server running
- [ ] Test email sent successfully
- [ ] Received internal notification
- [ ] Client received confirmation (if applicable)

---

## 🛠️ Advanced Configuration

### Rate Limiting
The form has built-in rate limiting (30 seconds between submissions) to prevent spam.

### Validation Rules
- **Name**: 2-50 characters, letters only
- **Email**: Valid email format required
- **Phone**: Optional, 10+ digits
- **Service**: Must select a service
- **Message**: 10-1000 characters

### Error Handling
The form handles:
- ✅ Network errors
- ✅ Service unavailable
- ✅ Rate limiting
- ✅ Validation errors
- ✅ EmailJS not configured

---

## 🆘 Troubleshooting

### Common Issues

**1. "Email service not configured" error**
- Check `.env.local` file exists and has correct variables
- Verify Public Key is correct
- Restart development server after changing `.env.local`

**2. "Failed to send message" error**
- Check EmailJS service is connected
- Verify template IDs are correct
- Check EmailJS account limits

**3. Emails not received**
- Check spam/junk folders
- Verify email addresses in templates
- Check EmailJS dashboard logs

**4. Template variables not working**
- Ensure template uses `{{variable_name}}` syntax
- Check variable names match exactly

### Getting Help
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Community: [https://github.com/emailjs/emailjs-sdk](https://github.com/emailjs/emailjs-sdk)

---

## 🎉 Success!

Once configured, your contact form will:
- ✅ Validate user input in real-time
- ✅ Send professional notification emails to your team
- ✅ Send confirmation emails to clients
- ✅ Handle errors gracefully
- ✅ Prevent spam with rate limiting
- ✅ Work in both English and French

Your TechWave Office contact form is now production-ready! 🚀 