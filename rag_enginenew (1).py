import json

with open("internships.json", "r", encoding="utf-8") as f:
    internships = json.load(f)

print("Total internships:", len(internships))


#converting each internship into a text document for better search results
documents = []

for item in internships:

    text = f"""
    Internship Id: {item['Internship Id']}
    Company: {item['Company name']}
    Role: {item['Role']}
    Location: {item['Location']}
    Duration: {item['Duration']}
    Skills: {item['Skills']}
    Stipend: {item['Stipend']}
    """

    documents.append(text)

   # print(internships[78])
   #testing if documents are created properly
print(documents[0])

#converts internships into semantic vectors for better search results
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")

embeddings = model.encode(documents)
