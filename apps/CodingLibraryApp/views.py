from django.shortcuts import render, HttpResponse, redirect
from .models import Note, Category, NoteComment, Subcategory
import bcrypt

def index(request):
    context = {
        'all_notes' : Note.objects.all(),
        'all_categories' : Category.objects.all(),
        'all_subcategories' : Subcategory.objects.all(),
        'NoteComments' : NoteComment.objects.all(),
    }
    return render(request, "CodingLibraryApp/index.html", context)

def addNote(request):
    form_title = request.POST['note-title']
    form_category = request.POST['note-category']
    form_content = request.POST['note-content']

    new_note = Note.objects.create(title=form_title, category=form_category, content=form_content)

    new_notecomment = NoteComment.objects.create(content=form_content, parent=new_note)

    return redirect('/')