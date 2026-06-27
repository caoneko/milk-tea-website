// Mobile nav toggle
const toggle = () => {
  const links = document.getElementById('nav-links')
  links.classList.toggle('open')
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('nav-toggle')
  if (btn) btn.addEventListener('click', toggle)

  // add shadow when scrolling
  const nav = document.getElementById('site-nav')
  const onScroll = () => {
    if (window.scrollY > 10) nav.classList.add('scrolled')
    else nav.classList.remove('scrolled')
  }
  window.addEventListener('scroll', onScroll, { passive: true })

  // copy WeChat id
  const wechatBtn = document.getElementById('wechat-btn')
  if (wechatBtn) {
    wechatBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('TeaYu_2024')
        wechatBtn.textContent = '已复制 WeChat' 
        setTimeout(() => (wechatBtn.textContent = '添加微信下单'), 2000)
      } catch (e) {
        alert('请手动复制微信号：TeaYu_2024')
      }
    })
  }
})
