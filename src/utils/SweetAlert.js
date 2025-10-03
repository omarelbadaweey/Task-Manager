import Swal from 'sweetalert2'

export const errorAlert = (message, darkMode = false) => {
  const theme = darkMode ? {
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    textColor: '#fecaca',
    buttonColor: '#f59e0b',
    iconColor: '#f59e0b'
  } : {
    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
    textColor: '#7f1d1d', 
    buttonColor: '#f59e0b',
    iconColor: '#dc2626'
  }

  Swal.fire({
    text: message,
    icon: 'error',
    background: theme.background,
    color: theme.textColor,
    confirmButtonText: 'فهمت',
    confirmButtonColor: theme.buttonColor,
    iconColor: theme.iconColor
  })
}