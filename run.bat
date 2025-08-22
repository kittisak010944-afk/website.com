:: ลบโฟลเดอร์ .git เดิม
rmdir /s /q .git

:: สร้าง git repo ใหม่
git init

:: ตั้ง remote ไปที่ GitHub (เปลี่ยน URL ได้ถ้าต้องการ)
git remote add origin https://github.com/kittisak010944-afk/website.com.git

:: เพิ่มไฟล์ทั้งหมด
git add .

:: commit ครั้งแรก
git commit -m "Initial commit for new version"

:: ตั้ง branch เป็น main
git branch -M main

:: push ทับทุกอย่างบน GitHub
git push origin main --force
