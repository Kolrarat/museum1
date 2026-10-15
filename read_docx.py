import zipfile
import xml.etree.ElementTree as ET

docx_path = r'C:\museum1\Project Brief ของ GRURU MUSEUM ภายใต้ธีม “New Knowledge (1).docx'
with zipfile.ZipFile(docx_path) as z:
    xml_content = z.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    texts = []
    for p in tree.iterfind('.//w:p', namespaces):
        p_texts = [node.text for node in p.iterfind('.//w:t', namespaces) if node.text]
        if p_texts:
            texts.append(''.join(p_texts))
    
    with open('extracted_doc.txt', 'w', encoding='utf-8') as out:
        out.write('\n'.join(texts))
    print(f"Extracted {len(texts)} paragraphs.")
