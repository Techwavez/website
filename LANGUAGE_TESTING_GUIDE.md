# 🌐 Language Detection Feature - Comprehensive Testing Guide

## 📋 Overview
This guide provides detailed instructions for thoroughly testing the automatic browser language detection feature in TechWave Office.

## 🎯 What We're Testing
- **Automatic Detection**: Website detects browser language preferences
- **Language Persistence**: User choices are remembered
- **Fallback Logic**: Unsupported languages default to English
- **Priority System**: localStorage > browser preferences > fallback

## 🛠️ Testing Tools Available

### 1. **Language Debug Panel** (Bottom-right corner)
- Shows current language state
- Displays browser language stack
- Shows detection logic results
- Provides test actions

### 2. **Header Debug Info** (Top header)
- Shows browser language and detected preference
- Real-time status indicator

### 3. **Feature Banner** (Home page)
- Announces the auto-detection capability

## 🧪 Test Scenarios

### ✅ **Test 1: Fresh User (No Saved Preference)**

**Setup:**
1. Open browser developer tools (F12)
2. Go to Application/Storage > Local Storage
3. Delete `preferred-language` key if it exists
4. Refresh the page

**Expected Results:**
- French browser → Website displays in French
- English browser → Website displays in English  
- Other languages → Website defaults to English

**Verification:**
- Check debug panel shows "Detection Result: fr/en (from browser: xxx)"
- Verify website content matches detected language

### ✅ **Test 2: Language Persistence**

**Setup:**
1. Manually switch language using the language toggle
2. Refresh the page multiple times
3. Close and reopen browser tab

**Expected Results:**
- Language choice persists across refreshes
- Debug panel shows "Detection Result: xx (from localStorage)"

**Verification:**
- Check localStorage has `preferred-language` set
- Website remembers choice despite browser language

### ✅ **Test 3: Browser Language Priority**

**To test different browser languages:**

#### Method A: Chrome/Edge
1. Go to `chrome://settings/languages`
2. Add desired language (French/German/Spanish)
3. Move it to top of list
4. Restart browser
5. Clear localStorage and refresh website

#### Method B: Firefox
1. Go to `about:preferences#general`
2. Under Language, click "Choose..."
3. Rearrange language preferences
4. Restart browser and test

#### Method C: Developer Tools Simulation
1. Open DevTools (F12)
2. Go to Console
3. Run test commands (see below)

### ✅ **Test 4: Multiple Browser Languages**

**Setup:**
Set browser language preferences in order:
1. Spanish (es-ES)
2. French (fr-FR) 
3. English (en-US)

**Expected Results:**
- Should detect French (first supported language)
- Debug panel shows detection from "fr-FR"

## 🔍 Developer Tools Testing

### Console Commands for Testing:

```javascript
// Check current browser languages
console.log('Browser Languages:', navigator.languages);
console.log('Primary Language:', navigator.language);

// Check localStorage
console.log('Saved Preference:', localStorage.getItem('preferred-language'));

// Clear saved preference
localStorage.removeItem('preferred-language');
console.log('Preference cleared - refresh to see auto-detection');

// Simulate language detection logic
function simulateDetection() {
  const saved = localStorage.getItem('preferred-language');
  if (saved) return `${saved} (saved)`;
  
  const langs = navigator.languages || [navigator.language];
  for (const lang of langs) {
    const code = lang.split('-')[0].toLowerCase();
    if (code === 'fr') return `fr (detected from ${lang})`;
    if (code === 'en') return `en (detected from ${lang})`;
  }
  return 'en (fallback)';
}

console.log('Detection Result:', simulateDetection());
```

### Network Tab Testing:
1. Open DevTools > Network tab
2. Refresh page
3. Look for any language-related headers in requests

## 📊 Expected Behavior Matrix

| Browser Language | Saved Preference | Expected Result | Priority |
|------------------|------------------|-----------------|----------|
| fr-FR | None | French | Browser |
| en-US | None | English | Browser |
| de-DE | None | English | Fallback |
| fr-CA | en | English | localStorage |
| en-GB | fr | French | localStorage |
| es-ES | None | English | Fallback |

## 🐛 Common Issues & Troubleshooting

### Issue: Language not switching automatically
**Solution:**
1. Ensure browser language is actually changed
2. Clear localStorage: `localStorage.removeItem('preferred-language')`
3. Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

### Issue: Debug panel not showing
**Solution:**
1. Ensure screen width > 1280px (xl breakpoint)
2. Check browser console for errors
3. Refresh page

### Issue: Detection showing wrong language
**Solution:**
1. Check `navigator.languages` array in console
2. Verify language codes are 'fr' or 'en' prefixed
3. Test with different browser language configurations

## 🔬 Advanced Testing

### Edge Cases:
1. **Empty browser languages**: Test with unusual browser configurations
2. **Regional variants**: Test fr-CA, en-GB, en-AU, etc.
3. **Mixed languages**: Multiple languages in browser preferences
4. **Incognito mode**: Test private browsing behavior
5. **Multiple tabs**: Test localStorage sync across tabs

### Performance Testing:
1. Check detection speed on page load
2. Monitor localStorage read/write operations
3. Test with slow network connections

## ✅ Verification Checklist

- [ ] Fresh user sees auto-detected language
- [ ] Manual language changes persist
- [ ] French browser variants (fr-FR, fr-CA) detect French
- [ ] English browser variants (en-US, en-GB) detect English
- [ ] Unsupported languages fallback to English
- [ ] localStorage takes priority over browser language
- [ ] Debug panel shows accurate information
- [ ] No console errors during detection
- [ ] Language switching works in both directions
- [ ] Feature works across browser restarts

## 🎯 Success Criteria

✅ **Feature is working correctly if:**
1. French browser users see French automatically
2. Language choice persists across sessions  
3. Fallback to English works for unsupported languages
4. No broken functionality when switching languages
5. Debug information matches actual behavior

## 📝 Reporting Issues

If you find any issues:
1. Note your browser language settings
2. Check localStorage content
3. Copy debug panel information
4. Note expected vs actual behavior
5. Include browser version and OS

---

**Note**: This is a development testing guide. Remove debug components before production deployment. 