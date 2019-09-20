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

def addCategory(request):
    category_name = request.POST['category-name']
    Category.objects.create(name=category_name)
    return redirect('/')

def addSubCategory(request, id):
    category_to_add_to = Category.objects.get(id=id)

    subcategory_name = request.POST['subcategory-name']
    Subcategory.objects.create(name=subcategory_name, parent=category_to_add_to)
    return redirect('/')

def addNote(request):
    
    # Grab data from webpage
    form_title = request.POST['note-title']
    form_category = request.POST['note-category']
    form_content = request.POST['note-content']

    # create a new note object
    new_note = Note.objects.create(title=form_title, category=form_category, content=form_content)

    # createa a new note comment
    new_notecomment = NoteComment.objects.create(content=form_content, parent=new_note)

    return redirect('/')

def editNote(request, id):
    print("Updating Note with id: " + id)
    NoteToUpdate = Note.objects.get(id=id)
    NoteToUpdate.title = request.POST['Note_title']
    NoteToUpdate.save()
    return redirect('/')

def deleteNote(request, id):
    NoteToDelete = Note.objects.get(id=id)
    NoteToDelete.delete()
    return redirect('/')

def addNoteComment(request, id):
    parent_object = Note.objects.get(id=id)
    form_content = request.POST['NoteComment_content']
    noteComment_content = NoteComment.objects.create(content=form_content, parent=parent_object)
    return redirect('/')

def editNoteComment(request, id):
    print("Updating comment with id: " + id)
    NoteCommentToUpdate = NoteComment.objects.get(id=id)
    NoteCommentToUpdate.content = request.POST['NoteComment_content']
    NoteCommentToUpdate.save()
    return redirect('/')
    
def deleteNoteComment(request, id):
    NoteCommentToDelete = NoteComment.objects.get(id=id)
    NoteCommentToDelete.delete()
    return redirect('/')