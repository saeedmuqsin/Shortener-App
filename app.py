import eel
import pyshorteners
import pyperclip as pc


eel.init('web')
shortener = pyshorteners.Shortener()

# function that will shotening the link 
@eel.expose
def generate_link(url):
    shorted_link = shortener.tinyurl.short(url)
    return shorted_link
 
# function that will copy the shortened link 
@eel.expose
def copy_text(data):
    pc.copy(data)

eel.start('index.html')
